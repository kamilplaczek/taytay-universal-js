import Link from 'next/link';

const Header = () => (
    <div>
        <div className="navbar">
            <span className="brand">
                Taylor Swift
            </span>
            <ul>
                <li><Link href="/index"><a>Home</a></Link></li>
                <li><Link href="/contact"><a>Contact</a></Link></li>
            </ul>
        </div>
        <hr />
        <style jsx>
            {`
                .navbar {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .brand {
                    font-size: 2.0rem;
                }

                  ul {
                     list-style-type: none;
                     margin: 0;
                     padding: 0;
                  }

                li {
                    float: left;
                    margin-left: 10px;
                }
            `}
        </style>
    </div>
)

export default Header;