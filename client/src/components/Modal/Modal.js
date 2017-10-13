import React from 'react';

export const Modal = () =>
    // <!-- Modal -->
    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                {children}
            </div>
        </div>
    </div>;