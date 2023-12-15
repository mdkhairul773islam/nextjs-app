import React, { memo, useMemo } from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/display-name
const Message = memo(({ loading = false, message = '', type = null }) => {
    const renderedMessage = useMemo(() => {
        if (!type) return null;

        const baseClass = "text-sm font-bold italic mb-2";
        const colorClass = {
            loading: "text-blue-500",
            success: "text-green-500",
            error: "text-red-500",
        };

        if (type === "loading") {
            return loading ? (
                <p role="status" className={`${baseClass} ${colorClass[type]}`}>
                    Loading...
                </p>
            ) : null;
        }

        const role = type === "error" ? "alert" : undefined;

        return (
            <p role={role} className={`${baseClass} ${colorClass[type]}`}>
                {message}
            </p>
        );
    }, [type, message, loading]);

    return <>{renderedMessage}</>;
});

Message.propTypes = {
    loading: PropTypes.bool,
    message: PropTypes.string,
    type: PropTypes.oneOf([null, 'loading', 'success', 'error']),
};

export default Message;
