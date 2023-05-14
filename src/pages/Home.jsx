import AnalistTable from "../components/AnalistTable"
import { HeroSelect } from "../components/HeroSelect"
import { Navbar } from "../components/Navbar"

export const Home = () => {
  return (
    <div>
        <Navbar />
        <HeroSelect />
        <AnalistTable />
    </div>
  )
}
