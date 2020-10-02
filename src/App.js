import React, { useState } from 'react';
import { Button, Container, FormControl, InputGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import InputForm from './components/InputForm/InputForm';
// import List from './components/List/List';

function App() {
  const [textLength, setTextLength] = useState(5)
  const [text, setText] = useState('')
  const [notes, setNotes] = useState(
    localStorage.getItem('notes') !== null
    ? localStorage.getItem('notes').split(',')
    : [])

  const handleChange = (e) => {
    setText(e.target.value)
  }
  const getTextLength = (e) => {
    setTextLength(e.target.value)
  }
  const handeSubmit = (e) => {
    e.preventDefault();

    if (text.length && text.length <= textLength) {
      setNotes([ text, ...notes ])
      localStorage.setItem('notes', [ text, ...notes ])
    } else {
      console.log('err')
    }
    setText('')
  }
  const handleDelete = (index) => {
    const _notes = [...notes]
    _notes.splice(index, 1)
    setNotes(_notes)
    localStorage.setItem('notes', [ _notes ])
  }

  return (
    <>
      <Container className='pt-4'>
        <h1>ToDo List</h1>
        <InputGroup className='text-length'>
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">Max text length</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            onChange={getTextLength}
            value={textLength}
          />
        </InputGroup>
        <InputForm 
          onSubmit={handeSubmit}
          onChange={handleChange}
          value={text}/>
        { text.length > textLength
          ? <span className='error'>maximum characters exceeded</span>
          : null}
        <hr />
        <ListGroup>
          {notes.map((note, index) => (
            <ListGroupItem 
              key={index}
              className='item'
              >
              <div>
                <input type='checkbox' id={index} />
                <label htmlFor={index}>{note}</label>
              </div>
              <Button onClick={() => handleDelete(index)}>delete</Button>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Container>
    </>
  );
}

export default App;
