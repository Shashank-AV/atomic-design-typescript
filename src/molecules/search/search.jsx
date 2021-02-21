import React from 'react';

const Search = ({className, src, imgClassname, classProps}) => {
    return (
        <div className={classProps}>
            <input
                className={className}
                type="text"
                maxlength="100"
                placeholder="Search for show, episode or shorts"
                name="search"
            />
            <img className={imgClassname} alt="searchSvg" src={src} />
        </div>
    )
}

export default Search