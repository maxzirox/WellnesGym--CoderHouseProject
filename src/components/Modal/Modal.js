import {useEffect, useState} from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { DialogContent } from '@mui/material';


const Modal = ({handleClose, open, children}) => {


    return(
        <div>
            <Dialog onClose={handleClose} open={open}>
                <DialogContent>
                    {children}
                </DialogContent>
            </Dialog>
        </div>
    )
}
export default Modal