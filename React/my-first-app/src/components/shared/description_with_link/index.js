import React, {Fragment} from 'react'

const DescriptionWithLink = props => {
    if(!props.description) {
        return null;
    }

    if (props.wiki_link) {
        return (
            <Fragment>
                <p>{props.description}</p>
                <p><a href={props.wiki_link}>{props.wiki_link}</a></p>
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                <p><u>{props.description}</u></p>
            </Fragment>
        )
    }
}


export default DescriptionWithLink