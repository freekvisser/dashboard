import React from 'react';

interface CircleProps extends React.SVGAttributes<SVGElement> {
    id?: string;
}

const Circle = (props: CircleProps) => (
    <svg id={props.id} className="checkbox" fill="#000000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 471.612 471.612" xmlSpace="preserve">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
        <g id="SVGRepo_iconCarrier"> <g> <path d="M68.987,402.624c91.98,91.983,241.652,91.983,333.636,0c91.983-91.977,91.983-241.658,0-333.639s-241.655-91.98-333.636,0 S-22.993,310.642,68.987,402.624z M87.29,87.276c81.899-81.896,215.152-81.896,297.052,0c81.882,81.894,81.882,215.154,0,297.055 c-81.899,81.887-215.164,81.887-297.052,0C5.394,302.431,5.394,169.17,87.29,87.276z"/> </g> </g>
    </svg>
)

export default Circle;