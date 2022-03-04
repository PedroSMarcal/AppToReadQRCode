import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import TicketPage from '../pages/TicketPage'

// Here you can scale your routes without changing in the app;
export function AppRoutes(){
    return (
        <Router>
            <Routes>
                {/* Follow this example bellow */}
                <Route path="/" element={<LandingPage />}/>
                <Route path="/:id" element={<TicketPage />}/>
            </Routes>
        </Router>
    )
}