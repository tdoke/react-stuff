import { useEffect } from 'react';
import { createConnection } from './chat.js';

export function useChatServer({ roomId, serverUrl }) {
    useEffect(() => {
        const connection = createConnection(serverUrl, roomId); // starting effect
        connection.connect();                                   // starting effect
        return () => connection.disconnect();                   // stopping effect
    }, [roomId, serverUrl]); // reactive values re-synchronizing and effect          
}