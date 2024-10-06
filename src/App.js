
import './App.css';

function App() {
  return (
    <main>
      <h1>$400<span>.00</span></h1>
      <form>
        <div className='basic'>
        <input type='text' placeholder={'+200 new samsung TV'}/>
        <input type='datetime-local'/>
        </div>
        <div>
        <input type='text' placeholder={'description'}/>
        </div>
        <button type='submit'>Add new transaction</button>
      </form>
      <div className='transactions'>
        <div className='transaction'>
          <div className='left'>
            <div className='name'>New samasung TV</div>
            <div className='description'>time for new TV</div>
          </div>
          <div className='right'>
            <div className='price red'>- $500</div>
            <div className='datetime'>2024-10-06</div>
          </div>
        </div>
        <div className='transaction'>
          <div className='left'>
            <div className='name'>New gig,website</div>
            <div className='description'>time for new TV</div>
          </div>
          <div className='right'>
            <div className='price green'>+ $500</div>
            <div className='datetime'>2024-10-06</div>
          </div>
        </div>
        <div className='transaction'>
          <div className='left'>
            <div className='name'>New Iphone</div>
            <div className='description'>time for new TV</div>
          </div>
          <div className='right'>
            <div className='price red'>- $900</div>
            <div className='datetime'>2024-10-06</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
