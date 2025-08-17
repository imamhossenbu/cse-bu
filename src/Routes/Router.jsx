
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Login from "../Pages/Login";
import ForgotPassword from "../Pages/ForgotPassword";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Notices from "../Pages/Notices";
import Gallery from "../Pages/Gallery";
import Contact from "../Pages/Contact";
import Admission from "../Pages/Admission";
import Faculty from "../Pages/Faculty";
import Courses from "../Pages/Academics/Courses";
import Syllabus from "../Pages/Academics/Syllabus";
import AcademicCalendar from "../Pages/Academics/AcademicCalendar";
import Research from "../Pages/Research/Research";
import Labs from "../Pages/Research/Labs";
import Projects from "../Pages/Research/Projects";
import Publications from "../Pages/Research/Publications";
import Alumni from "../Pages/Others/Alumni";
import Clubs from "../Pages/Others/Clubs";
import Resources from "../Pages/Others/Resources";
import Privacy from "../Pages/Privacy";
import Terms from "../Pages/Terms";
import Sitemap from "../Pages/Sitemap";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            }
            ,
            {
                path: '/notices',
                element: <Notices />

            },
            {
                path: '/gallery',
                element: <Gallery />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/admission',
                element: <Admission />
            },
            {
                path: '/faculty',
                element: <Faculty />
            },
            {
                path: '/academics/courses',
                element: <Courses />
            },
            {
                path: '/academics/syllabus',
                element: <Syllabus />
            },
            {
                path: '/academics/calendar',
                element: <AcademicCalendar />
            },
            {
                path: '/research',
                element: <Research />
            },
            {
                path: '/research/labs',
                element: <Labs />
            },
            {
                path: '/research/projects',
                element: <Projects />
            },
            {
                path: '/research/publications',
                element: <Publications />
            },
            {
                path: '/alumni',
                element: <Alumni />
            },
            {
                path: '/clubs',
                element: <Clubs />
            },
            {
                path: '/resources',
                element: <Resources />
            },
            {
                path: '/privacy',
                element: <Privacy />
            },
            {
                path: '/terms',
                element: <Terms />
            },
            {
                path: '/sitemap',
                element: <Sitemap />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/forgot-password',
                element: <ForgotPassword />
            }
        ],
    },

]);


export default router;