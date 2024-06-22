

import {AppBar , Toolbar, Typography} from '@mui/material'
import { logo } from '../constants/constant'



const Header: React.FC = ()=>{
    return(
         <AppBar color='transparent' position='static'>
            <Toolbar>
              <img src={logo} alt='logo' style={{width:30 , marginRight:10}}/>
              <Typography>Evernote</Typography>
            </Toolbar>
         </AppBar>
    )
}

export default Header