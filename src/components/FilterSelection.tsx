import { useLoading } from '@/contexts/loadingContext';
import useTodos from '@/hooks/useTodos';
import { TaskInterface } from '@/interface';
import { useEffect, useState } from 'react';

const FilterSelection = (props: any) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState('All');
    const [arrow, setArrow] = useState('▼');
    const [activeItem, setActiveItem] = useState(0);
    const {
        items,
        todoDefault,
        setTodoDefault
    } = props
    let { todos, setTodos, getTaskList } = useTodos()
    const { isLoading, setIsLoading } = useLoading()

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        setArrow(menuOpen ? '▼' : '▲');
    };

    const selectItem = (item: any, index: any) => {
        setIsLoading(true)
        setMenuOpen(false);
        setSelectedItem(item.text);
        setActiveItem(index);
        setArrow('▼');
        getTaskList()
    };

    useEffect(() => {
        if (todos.state === "GET_TASKLIST_SUCCESS") {
            console.log(selectedItem)
            if (todos.results) {
                let newTasks = { ...todos }
                if (selectedItem === "All") {

                } else if (selectedItem === "Done") {
                    if (newTasks.results?.length) {
                        newTasks.results = newTasks.results.filter((e: TaskInterface) => e.completed === true)
                    }
                } else if (selectedItem === "Undone") {
                    if (newTasks.results?.length) {
                        newTasks.results = newTasks.results.filter((e: TaskInterface) => e.completed === false)
                    }
                }
                setTodoDefault({
                    ...todoDefault,
                    results: newTasks.results
                })
                setTodos({
                    ...todos,
                    state: "STAND_BY"
                })
                // console.log(newTasks)
            }
            setIsLoading(false)
        }
    }, [todos.state])

    return (
        <div className="dropdown">
            <button className="dropdown-toggle" onClick={toggleMenu}>
                {selectedItem} {arrow}
            </button>
            {menuOpen && (
                <div className="dropdown-menu">
                    {items.map((item: any, index: any) => (
                        <a
                            key={index}
                            href="#"
                            className={`dropdown-item${index === activeItem ? ' active' : ''}`}
                            onMouseEnter={() => setActiveItem(index)}
                            onClick={() => selectItem(item, index)}
                        >
                            {item.text}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FilterSelection;
