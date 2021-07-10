import React from 'react';
import { useContext } from 'react';
import { RoomContext } from '../Context';
import Title from '../components/Title';

const getUnique = (items,value)=>{
    return [...new Set(items.map(item => item[value]))]
}
export default function RoomsFilter({rooms}) {
    const context = useContext(RoomContext)
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
        
    } = context;
    let types = getUnique(rooms, 'type');
    types = ['all',...types];
    types = types.map((item,index) => {
        return <option value={item} key={index}>{item}</option>
    });
    let people = getUnique(rooms, 'capacity');
    people = people.map((item,index) => {
        return  <option value={item} key={index}>{item}</option>
    })
    return (
        <section className="filter-container">
            <Title title="search rooms" />
            <form className="filter-form">
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type"  
                    id="type" 
                    value={type}
                    className="form-control"
                    onChange={handleChange}>
                          {types}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="capacity">Gests</label>
                    <select name="capacity"  
                    id="capacity" 
                    value={capacity}
                    className="form-control"
                    onChange={handleChange}>
                          {people}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="price">room price ${price}</label>
                    <input type="range"
                    name="price"  
                    min={minPrice}
                    max={maxPrice}
                    id="price"
                    value={price}
                    className="form-control"
                    onChange={handleChange} />
                          
                    
                </div>
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                   <div className="size-inputs">
                   <input type="number"
                    name="minSize"  
                    id="size"
                    value={minSize}
                    className="size-input"
                    onChange={handleChange} />
                   <input type="number"
                    name="maxSize"  
                    id="size"
                    value={maxSize}
                    className="size-input"
                    onChange={handleChange} />
                   </div>
                </div>
                <div className="from-group">
                    <div className="single-extra">
                       <input name="breakfast" checked={breakfast} type="checkbox" id="breakfast"
                        onChange={handleChange} />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                       <input name="pets" checked={pets} type="checkbox" id="pets"
                        onChange={handleChange} />
                        <label htmlFor="petst">pets</label>
                    </div>
                </div>

            </form>
        </section>
    )
}
