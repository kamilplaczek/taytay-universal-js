import Header from './header';

const Layout = (props) => (
    <div className="container">
        <Header />
        {props.children}
        <style jsx>
            {`
                .container {
                  max-width: 640px;
                  margin: 0 auto;
                  text-align: justify;
                  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
                }
            `}
        </style>
    </div>
)

export default Layout;