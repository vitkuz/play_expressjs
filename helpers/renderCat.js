module.exports = (cat) => {
    return `
        <html>
            <head>
                <title>
                    ${cat._id}
                </title>
            </head>
            <body>
                ${ cat.name } <a href="/item/${ cat._id }/remove">Remove</a> | <a href="/item/${ cat._id }/update">Update</a>
            </body>
        </html>
    `
}