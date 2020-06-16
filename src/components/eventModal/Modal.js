import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import api from '../../services/api'
import { FaEdit } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { BsPlusSquareFill } from 'react-icons/bs'

export default function FormDialog(props) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState()
  const [artist, setArtist] = useState()
  const [address, setAddress] = useState()
  const [img, setImg] = useState()

  async function handleEventPost(e){
    e.preventDefault()

    const eventData = {
        data,
        artist,
        address,
        img
    }
      try{
        await api.post('/events', eventData)
        alert("Evento adicionado")
        handleClose()
      }catch(err){
        alert("Erro ao adicionar evento")
      }
  }
  async function handleEventEdit(e){
    e.preventDefault()

    const eventData = {
        data,
        artist,
        address,
        img
    }

    try{
      await api.put(`/event/${props.id}`, eventData)
      alert("Evento editado com sucesso")
      handleClose()
    } catch(err){
      return alert("Algo deu errado")
    }
  }
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
        {props.addEvent ? 
          <IconContext.Provider value={{ size:"2em", className: "del" }}>
            <BsPlusSquareFill onClick={handleClickOpen}/>
          </IconContext.Provider> : 
          <IconContext.Provider value={{ size:"2em", className: "del" }}>
            <FaEdit onClick={handleClickOpen}/>
          </IconContext.Provider>
        }
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
    <DialogTitle id="form-dialog-title">Evento</DialogTitle>
        <DialogContent onSubmit={handleEventPost}>
          <DialogContentText>
            Para {props.action} um evento, preencha os campos abaixo
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="data"
            label="Data no formato dd/mm/aaaa"
            type="text"
            fullWidth
            value={data}
            onChange={e => setData(e.target.value) }
          />
          <TextField
            autoFocus
            margin="dense"
            id="artist"
            label="Artista"
            type="text"
            fullWidth
            value={artist}
            onChange={e => setArtist(e.target.value) }
          />
          <TextField
            autoFocus
            margin="dense"
            id="local"
            label="Local"
            type="text"
            fullWidth
            value={address}
            onChange={e => setAddress(e.target.value) }
          />
          <TextField
            autoFocus
            margin="dense"
            id="img"
            label="Foto"
            type="text"
            fullWidth
            value={img}
            onChange={e => setImg(e.target.value) }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={props.action == "adicionar" ? handleEventPost : handleEventEdit} color="primary" type="submit">
            Cadastrar/Editar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
