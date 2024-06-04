import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyApp from './subscriptions';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MyApp />} />
            </Routes>
        </Router>
    );
}

export default App;