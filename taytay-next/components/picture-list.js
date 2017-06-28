const PictureList = (props) => {
    if (props.pics) {
        const pics = props.pics.map(pic => (
            <li style={{'float': 'left'}} className="picture" key={pic.id}><img src={pic.url} /></li>
        ));
        return (
            <div>
                <ul>
                    {pics}
                </ul>
                <style jsx>
                    {`
                        ul {
                          list-style-type: none;
                          margin: 0;
                          padding: 0;
                        }
                    `}
                </style>
            </div>
        )
    }
    return null;
 }

export default PictureList;