import React from 'react';
// import "./Form.css";

export const FormSelect = (props) =>
    <div className="dropdown">
        <select required = "required" placeholder="Select...">
            <option value="Select">
                {/* {this.props.children} */}
            </option>
        </select>
    </div>;

// export const FormSelect = ( {children} ) =>
//     <div className="dropdown">
//         <select required = "required" placeholder="Select...">
//             <option value="Select">
//                 {children}
//             </option>
//         </select>
//     </div>;

