
import './App.css';

function App() {
  const onClick = (event) => {
    if(event.currentTarget.classList.contains('right')) {
    const main = document.querySelector('.main-img')
    let id = main.id
    let newId = Number(id)+1
    console.log(id)
    let newMain = document.getElementById(`${newId}`)
    newMain.classList.add('first')
    console.log(newMain)
    let newSrc = newMain.src
    main.src=newSrc
    main.id=newId
    newMain.scrollIntoView()
    const blocks = document.querySelectorAll('.block-img')
    console.log(blocks[id])
    blocks[id].classList.remove('first')
    }
    if(event.currentTarget.classList.contains('left')) {
      const main = document.querySelector('.main-img')
      let id = main.id
      let newId = Number(id)-1
      let newMain = document.getElementById(`${newId}`)
      newMain.classList.add('first')
      let newSrc = newMain.src
      main.src=newSrc
      main.id=newId
      console.log(newMain)
      newMain.scrollIntoView()
      const blocks = document.querySelectorAll('.block-img')
      console.log(blocks[id])
      blocks[id].classList.remove('first')
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className='main'><div className='main-block'><img id='0' src={require('./images/first.jpg')}  className='main-img' alt=""></img></div></div>
      </header>
      <div className='arrow-slide'>
      <div className='arrow-block'><img src={require('./images/icon-2423347_1280.png')} onClick={onClick} className='arrow left' alt=""></img></div>
      <div className='slider'>
        <div className='block'><img id='0' src={require('./images/first.jpg')}  className='block-img first' alt=""></img></div>
        <div className='block'><img id='1' src={require('./images/second.jpg')}  className='block-img' alt=''></img></div>
        <div className='block'><img id='2' src={require('./images/third.jpg')}  className='block-img' alt=''></img></div>
        <div className='block'><img id='3' src={require('./images/fourth.webp')} className='block-img' alt=''></img></div>
        <div className='block'><img id='4' src={require('./images/five.jpg')}  className='block-img' alt=''></img></div>
        <div className='block'><img id='5' src={require('./images/six.jpg')} className='block-img' alt=''></img></div>
        <div className='block'><img id='6' src={require('./images/seven.jpeg')} className='block-img' alt=''></img></div>
        <div className='block'><img id='7' src={require('./images/eight.webp')} className='block-img' alt=''></img></div>
        <div className='block'><img id='8' src={require('./images/nine.jpeg')} className='block-img' alt=''></img></div>
        <div className='block'><img id='9' src={require('./images/ten.jpg')} className='block-img' alt=''></img></div>
        <div className='block'><img id='10' src={require('./images/eleven.jpg')} className='block-img' alt=''></img></div>
      </div>
      <div className='arrow-block right'><img src={require('./images/icon-2423347_1280.png')} onClick={onClick} className='arrow right' alt=""></img></div>
      </div>
    </div>
  );
}

export default App;
