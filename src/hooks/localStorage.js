import React, { useState, useEffect } from 'react';

function getTodos(key, initialValue) {
    const savedTodos = localStorage.getItem(key);
    return savedTodos ? JSON.parse(savedTodos) : initialValue;
}

// Custom hook to handle task storage
export function useTaskLocalStorage(key, initialValue) {
    const [todos, setTodos] = useState(() => getTodos(key, initialValue));

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(todos));
    }, [todos, key]);

    return [todos, setTodos];
}


function getProjects(key, initialValue) {
    const savedProjects = localStorage.getItem(key);
    return savedProjects ? JSON.parse(savedProjects) : initialValue;
}

// Custom hook to handle project storage
export function useProjectLocalStorage(key, initialValue) {
    const [projects, setProjects] = useState(() => getProjects(key, initialValue));

    useEffect(() => {
        if(projects)
            localStorage.setItem(key, JSON.stringify(projects));
    }, [projects, key]);

    return [projects, setProjects];
}
