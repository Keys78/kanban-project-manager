import Reac, { useState } from 'react'
import Image from 'next/image'
import Button from '@components/shared/Button'
import EditButton from '@components/shared/EditButton'
import { useTheme } from "next-themes"
import Modal from '@components/Modal'
import AddNewTaskModal from '@components/Modal/AddNewTaskModal'
import { RootState } from 'app/store'
import { useAppSelector } from 'app/hooks'
import { useWindowSize } from 'usehooks-ts'





const Header = () => {
  const [isAddNewTask, setIsAddNewTask] = useState<boolean>(false)
  const { theme } = useTheme();
  const { width } = useWindowSize()

  const data = useAppSelector((state: RootState) => state.boards.boards)
  const currentBoard = useAppSelector((state: RootState) => state?.currentBoard)
  const boardTitle: any = data?.length && (data)[currentBoard.value].name


  return (
    <>
      <header className='flex items-center justify-between h-[85px] bg-white dark:bg-darkGrey dark:text-white dark:border-darkGreyLine border-4 w-[100vw]'>
        <div className="w-[360px] p-8 box-border transition-all ease border-r border-r-lightGreyLine dark:border-r-darkGreyLine">
          {theme === "dark" ? (
            <Image src="/assets/logo-light.svg" height={25} width={152} />
          ) : (
            <Image src="/assets/logo-dark.svg" height={25} width={152} />
          )
          }

        </div>
        <div className='flex items-center justify-between w-[100%] px-6 border border-red-500'>
          <h2 className='font-sans text-lg font-bold'>{boardTitle ? boardTitle : "Create New Board"}</h2>
          <div className='flex items-center space-x-4'>
            <Button children={"+ Add New Task"} padding={'py-3 px-4'} width={''} color={'text-white'} font_weight={'font-bold'} onClick={() => setIsAddNewTask(!isAddNewTask)} />
            {/* <EditButton currentBoard={boardTitle}
              className={'-bottom-28 -left-44 border '}
              type="Board"
            /> */}
          </div>
        </div>
      </header>
      <Modal setShowModal={setIsAddNewTask} showModal={isAddNewTask}>
        <AddNewTaskModal />
      </Modal>
    </>
  )
}

export default Header;