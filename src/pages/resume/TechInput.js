import React, { useState } from 'react';
import './ResumeInput.css';

const TechInput = ({ setTech_tags, tech_tags }) => {
    const Tags = [
        'Java', 'Spring Boot', 'Python', 'Spring Framework',
        'AWS', 'Git', 'iOS', 'HTML', 'JavaScript', 'MySQL', 'Linux', 'Android',
        'Kotlin', 'Swift', 'C', 'PHP', 'Docker', 'React', 'Github', 'JPA', 'C++', 'Node.js', 'TypeScript', 'Vue.js', 'Angular', 'Next.js'
    ];

    const handleChange2 = (e) => {
        const isChecked = e.target.checked;
        const name = e.target.name;

        if (isChecked) {
            setTech_tags([...tech_tags, name]);
        } else {
            setTech_tags(tech_tags.filter(e => e !== name));
        }
    }

    const saveChecked = (tech, idx) => {
        if (tech_tags.indexOf(tech) !== -1) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <>
            <tr>
                <th colSpan='2' className='title'>보유기술</th>
            </tr>
            <tr>
                <td className='nameTech' colSpan='2'>
                    {
                        Tags.map((tech, idx) => (
                            <label><input type="checkbox" name={tech} value={tech} onChange={handleChange2}
                                checked={saveChecked(tech, idx)} /> {tech}</label>
                        ))
                    }<br />
                    {tech_tags &&
                        tech_tags.map((tech, idx) => (

                            <button type='button' className='btn btn-warning btn-sm'>{tech}</button>
                        ))
                    }
                </td>
            </tr>
        </>
    );
};

export default TechInput;