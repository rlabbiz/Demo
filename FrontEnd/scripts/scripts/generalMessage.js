class NotificationManager {
    constructor() {
        this.container = document.getElementById('generalMessage');
    }

    create(options) {
        const {
            type = 'info',
            title,
            message,
            icon,
            actions = [],
            duration = 5000
        } = options;

        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        
        notification.innerHTML = `
            <div class="notification-icon">
                <i class="${icon}"></i>
            </div>
            <div class="notification-content">
                <h4 class="notification-title">${title}</h4>
                <p class="notification-message">${message}</p>
                ${this.createActionButtons(actions)}
            </div>
            <button class="notification-close" aria-label="Close notification">
                <i class="fas fa-times"></i>
            </button>
            <div class="notification-progress">
                <div class="progress-bar"></div>
            </div>
        `;

        this.container.appendChild(notification);

        // GSAP Animations
        gsap.set(notification, {
            opacity: 0,
            rotateX: -90,
            transformOrigin: "right center"
        });
        
        gsap.to(notification, {
            opacity: 1,
            rotateX: 0,
            duration: 0.5,
            ease: "back.out(1.7)"
        });

        gsap.to(notification.querySelector('.progress-bar'), {
            scaleX: 0,
            duration: duration/1000,
            ease: "none"
        });

        // Setup event listeners
        notification.querySelector('.notification-close').addEventListener('click', 
            () => this.remove(notification));

        // Auto remove after duration
        setTimeout(() => this.remove(notification), duration);

        return notification;
    }

    createActionButtons(actions) {
        if (!actions.length) return '';
        
        return `
            <div class="notification-actions">
                ${actions.map(action => `
                    <button class="action-button ${action.type}" onclick="${action.onClick}">
                        ${action.text}
                    </button>
                `).join('')}
            </div>
        `;
    }

    remove(notification) {
        gsap.to(notification, {
            opacity: 0,
            x: 100,
            duration: 0.5,
            ease: "power2.in",
            onComplete: () => {
                if (notification.parentElement) {
                    notification.parentElement.removeChild(notification);
                }
            }
        });
    }
}

const notificationManager = new NotificationManager();

// Rest of your notification functions remain the same
function showLoginNotification() {
    notificationManager.create({
        type: 'success',
        title: 'Welcome Back! 👋',
        message: 'Successfully logged into your account',
        icon: 'fas fa-check-circle'
    });
}

function showLogoutNotification() {
    notificationManager.create({
        type: 'info',
        title: 'See You Soon! 👋',
        message: 'You have been safely logged out',
        icon: 'fas fa-sign-out-alt'
    });
}

function showGameRequest() {
    notificationManager.create({
        type: 'request',
        title: 'Game Challenge! 🎮',
        message: 'John wants to play Chess with you!',
        icon: 'fas fa-gamepad',
        actions: [
            {
                type: 'accept',
                text: 'Let\'s Play',
                onClick: 'handleGameAccept()'
            },
            {
                type: 'reject',
                text: 'Not Now',
                onClick: 'handleGameDecline()'
            }
        ]
    });
}

function showFriendRequest() {
    notificationManager.create({
        type: 'request',
        title: 'New Friend Request 🤝',
        message: 'Sarah would like to connect with you',
        icon: 'fas fa-user-plus',
        actions: [
            {
                type: 'accept',
                text: 'Accept',
                onClick: 'handleFriendAccept()'
            },
            {
                type: 'reject',
                text: 'Decline',
                onClick: 'handleFriendDecline()'
            }
        ]
    });
}

function showNewMessage() {
    notificationManager.create({
        type: 'message',
        title: 'New Message 💬',
        message: 'Mike: Hey! Are you available for a quick chat?',
        icon: 'fas fa-envelope',
        actions: [
            {
                type: 'view',
                text: 'Reply Now',
                onClick: 'handleViewMessage()'
            }
        ]
    });
}

// Handle action functions with enhanced notifications
function handleGameAccept() {
    notificationManager.create({
        type: 'success',
        title: 'Game On! 🎮',
        message: 'Preparing your game room...',
        icon: 'fas fa-check-circle'
    });
}

function handleGameDecline() {
    notificationManager.create({
        type: 'info',
        title: 'Maybe Next Time 👋',
        message: 'Game request declined',
        icon: 'fas fa-times-circle'
    });
}

function handleFriendAccept() {
    notificationManager.create({
        type: 'success',
        title: 'New Friend Added! 🎉',
        message: 'You and Sarah are now connected',
        icon: 'fas fa-user-check'
    });
}

function handleFriendDecline() {
    notificationManager.create({
        type: 'info',
        title: 'Request Declined 👋',
        message: 'Friend request has been declined',
        icon: 'fas fa-user-times'
    });
}

function handleViewMessage() {
    notificationManager.create({
        type: 'info',
        title: 'Opening Chat 💭',
        message: 'Taking you to your messages...',
        icon: 'fas fa-comment'
    });
}