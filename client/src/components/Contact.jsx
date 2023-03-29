import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import * as ioicons from 'react-icons/io5'
import Modal from './Modal';


const Contact = ({student, toUpdate, toDelete}) => {

    const onUpdate = (toUpdateStudent) => {
        toUpdate(toUpdateStudent)
    }

    const onDelete = (toDeleteStudent) => {
        toDelete(toDeleteStudent)
    }

    return (
        <Card>
            <Card.Body>
            <Card.Title>{student.firstname} {student.lastname} </Card.Title>
            <Button variant="outline-danger" onClick={()=>{onDelete(student)}} style={{padding: '0.6em', marginRight:'0.9em'}}><ioicons.IoTrash/></Button>
            <Button variant="outline-info" onClick={()=>{onUpdate(student)}} style={{padding: '0.6em'}}> <ioicons.IoSync/></Button>
            <Modal> {student.phonenumber} {student.email}</Modal>
            </Card.Body>
        </Card>
    )

}

export default Contact;

//Put JSX inside of Modal tag!!!  that will be available via props.children