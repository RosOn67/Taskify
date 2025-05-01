import Flag from '@/assets/icons/flag.svg?react';
import React,{useState} from 'react';

export const PriorityDropdown = (props)=>{
    const {onSelectPriority} = props; //on select priroty is a handler function according to is editing or adding new todo


    return (
        <div className="priority-dropdown">
            <span className="select-priority flex items-center ">
                    <Flag />
                    <span className="priority-label">Priority</span>
            </span>
            <div className="priority-dropdown-options flex flex-col">
                <span className={`priority-item flex items-center priority-icon-1`}>
                    <Flag/>
                    <span className="priority-item-value" onClick={()=>{onSelectPriority(1)}}>Priority 1</span>
                </span>
                <span className={`priority-item flex items-center priority-icon-2`}>
                    <Flag/>
                    <span className="priority-item-value" onClick={()=>{onSelectPriority(2)}}>Priority 2</span>
                </span>
                <span className={`priority-item flex items-center priority-icon-3`}>
                    <Flag/>
                    <span className="priority-item-value" onClick={()=>{onSelectPriority(3)}}>Priority 3</span>
                </span>
                <span className={`priority-item flex items-center priority-icon-4`}>
                    <Flag/>
                    <span className="priority-item-value" onClick={()=>{onSelectPriority(4)}}>Priority 4</span>
                </span>
            </div>
        </div>
    )
}