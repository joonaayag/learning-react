import "./App.css";
import { TwitterFollowCarrd } from "./TwitterFollowCarrd";

const users = [
    {
        userName: "midudev",
        name: "Miguel Ángel Durán",
        initialIsFollowing: true
    },
    {
        userName: "pheralb",
        name: "Pablo Hernandez",
        initialIsFollowing: false
    },
    {
        userName: "elonmusk",
        name: "Elon Musk",
        initialIsFollowing: false
    }
]

export function App() {
    const formatUserName = (userName) => `@${userName}`
  return (
    <section className="App">

    {
        users.map(user => {
            const {userName, name, initialIsFollowing} = user;
            return <TwitterFollowCarrd key={userName} formatUserName={formatUserName} userName={userName} name={name} initialIsFollowing={initialIsFollowing} />
        })
    }      
      
    </section>
  )
}