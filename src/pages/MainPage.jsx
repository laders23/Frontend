import Header from "/src/components/Header"
import Index from "/src/pages/Index";
import IndexBody from "/src/pages/IndexBody";
import IndexFooter from "/src/pages/IndexFooter";

function MainPage() {
    return(
        <>
            <Header />
            <Index />
            <IndexBody />
            <IndexFooter />
        </>
    )
}

export default MainPage;