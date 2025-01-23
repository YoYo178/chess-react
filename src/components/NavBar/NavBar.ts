import React from "react";


// Play buttons
async function playOnline(event: React.MouseEvent<HTMLElement>): Promise<void> {
    // TODO: Online matchmaking
}

async function playWithBot(event: React.MouseEvent<HTMLElement>): Promise<void> {
    // TODO: Create game against a computer
}

async function playWithFriend(event: React.MouseEvent<HTMLElement>): Promise<void> {
    // TODO: Create private games to share link with friends
}

async function playWithSelf(event: React.MouseEvent<HTMLElement>): Promise<void> {
    // TODO: Present the player with the "offline", practice game (or for 2 players on same device )
}

// Sign in button
async function signIn(event: React.MouseEvent<HTMLElement>): Promise<void> {
    // TODO: Show user the sign-in/register page
}

export const ButtonHandler = {
    playOnline,
    playWithBot,
    playWithFriend,
    playWithSelf,
    signIn
}