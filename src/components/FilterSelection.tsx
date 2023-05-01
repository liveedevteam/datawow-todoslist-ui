import { useState } from 'react';

const FilterSelection = (props: any) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState('All');
    const [arrow, setArrow] = useState('▼');
    const [activeItem, setActiveItem] = useState(null);

    const { items } = props

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        setArrow(menuOpen ? '▼' : '▲');
    };

    const selectItem = (item: any, index: any) => {
        setMenuOpen(false);
        setSelectedItem(item.text);
        setActiveItem(index);
        setArrow('▼');
    };

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
