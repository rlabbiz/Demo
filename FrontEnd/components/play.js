import { data } from './gameWaiting.js';

export function playOnlineScript() {
    // const ws = new WebSocket(`ws://localhost:1212/ws/play/${data.roomName}`)
    const ws = new WebSocket(`ws://localhost:1212/ws/play/${data.roomName}/`)
    
    
}