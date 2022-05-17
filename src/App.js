import './App.css';
import divider from './images/pattern-divider-desktop.svg'
import iconDice from './images/icon-dice.svg'

function App() {
    return (
        <div className={"main-body"}>
            <div className={'main-card'}>
                <div className={'advice-header'}>
                    <span>ADVICE #117</span>
                </div>
                <div className={'advice-content'}>
                    <p>Actual Advice</p>
                </div>
                <div className={'advice-footer'}>
                    <img src={divider} alt="Divider on desktop"/>
                </div>
                <div className={'advice-button'}>
                    <button>
                        <img src={iconDice} alt=""/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
