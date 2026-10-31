import InfosPerso from './components/InfosPerso';
import Experiences from './components/Experiences';
import Competences from './components/Competences';

function App() {
    return (
        <div className="container">

            <h1>MON CURRICULUM VITAE</h1>

            <InfosPerso />

            <Experiences />

            <Competences />

        </div>
    );
}

export default App;