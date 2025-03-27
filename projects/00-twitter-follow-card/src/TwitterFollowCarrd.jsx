import { useState } from "react"
export function TwitterFollowCarrd ({formatUserName, userName = 'Unknown', name = 'Unknown', initialIsFollowing}) {
    //State returns 2 values, the first one is the value of the state and the second one is the function to update the state
    // const state = useState(false);
    // const isFollowing = state[0];
    // const setisFollowing = state[1];
    // ==
    const [isFollowing, setisFollowing] = useState(initialIsFollowing);

    const text = isFollowing ? 'Following' : 'Follow'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
    const srcImage = `https://unavatar.io/${userName}`

    const handleClick = () => {
        setisFollowing(!isFollowing)
    }
    
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src={srcImage} alt="Avatar de miduddev" />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                <button onClick={handleClick} className={buttonClassName}>
                    <span className="tw-followCard-text">{text}</span>
                <span className="tw-followCard-stopFollow">Stop following</span>
                </button>
            </aside>
        </article>
    )
}