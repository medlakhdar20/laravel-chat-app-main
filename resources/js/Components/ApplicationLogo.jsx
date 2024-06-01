import React from 'react';

export default function ApplicationLogo(props) {
    return (
        <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="11" fill="#2196F3" />
            <text x="50%" y="53%" text-anchor="middle" fill="#FFFFFF" font-size="13" font-weight="bold" dy=".3em">G</text>
        </svg>
    );
}
