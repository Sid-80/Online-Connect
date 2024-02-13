import Board from "@/components/Board"
import Menu from "../components/Menu/page"
import Toolbox from "../components/Toolbox/page"


export default async function Home() {


  return  (
    <>
      <Menu />
      <Toolbox />
      <Board />
    </>
  )
}
