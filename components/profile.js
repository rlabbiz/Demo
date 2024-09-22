import { header, menu } from '../scripts/components.js'

export function profileComponent() {
    return (
        header() +
        menu() +
        profileContent()
    )
}

export function profileContent() {
    return (`
        <div class="profile">
            profile Content here
        </div>
    `)
}