import { useNavigate } from 'react-router-dom'
import { getUserById, getRoleById } from '../../Server/Crud/Crud';
import './index.css'


// Icons 
import HomeIcon from '@mui/icons-material/Home';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
// Icons

// Context
import { useContextValue } from '../../Context/UseContext';
import { useEffect, useState } from 'react';
// Context



const NavPC = () => {
    const Navigation = useNavigate()
    const [UserIdData, setUserIdData] = useState([])
    const [RoleIdData, setRoleIdData] = useState('')

    const meter1LG = () => {
        localStorage.setItem('userId', 1)
    }

    const obtainUserData = async () => {
        const data =  await getUserById(2)
        setUserIdData(data)
        const dataRole = await getRoleById(data.roles)
        console.log(dataRole)
        setRoleIdData(dataRole.role_name)
    }

    useEffect(() => {
        obtainUserData()
    }, [])

    const { userId } = useContextValue()

    // director, lider, colaborador


  return (
      <>
        <nav className='NavPC'>
          <div onClick={() => Navigation('/home')}><HomeIcon style={{fontSize: 36}} className='icons'/></div>
          <div onClick={() => Navigation('/asistencia')}><AppRegistrationIcon style={{fontSize: 36}} className='icons'/></div>
          {['lider', 'director'].includes(RoleIdData) ? <div onClick={() => Navigation('/justificacion')}><DriveFileRenameOutlineIcon style={{fontSize: 36}} className='icons' /></div> : null}
          {RoleIdData == 'colaborador' ? <div onClick={() => Navigation('/justificacion')}><DriveFileRenameOutlineIcon style={{fontSize: 36}}/></div> : null}
          {RoleIdData == 'director' ? <div onClick={() => Navigation('/crud')}><FolderSharedIcon style={{fontSize: 36}}/></div> : null}
        </nav>
      </>
  )
}

export default NavPC