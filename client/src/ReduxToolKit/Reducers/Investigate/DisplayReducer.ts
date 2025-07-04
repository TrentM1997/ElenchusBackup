import { createSlice } from "@reduxjs/toolkit";
import { acceptedInput } from "./Steps";

interface Display {
    showMindMap: boolean,
    showSearch: boolean,
    showContent: boolean,
    showWrapUp: boolean,
    showResults: boolean,
    showCompletion: boolean,
    showWorkModal: boolean,
    showSelectBar: boolean,
    showBackToSearchModal: boolean,
    showGetArticlesModal: boolean,

    showSelectWarning: boolean,
    showSelectTooltip: boolean,
    showReadingTooltip: boolean,

    showFeedBackForm: boolean,
    showBlueSkySearch: boolean | null
}

const initialState: Display = {
    showMindMap: true,
    showSearch: false,
    showContent: false,
    showWrapUp: false,
    showResults: false,
    showCompletion: false,
    showWorkModal: false,
    showSelectBar: false,
    showBackToSearchModal: false,
    showGetArticlesModal: false,
    showSelectWarning: false,
    showSelectTooltip: false,
    showReadingTooltip: false,
    showFeedBackForm: null,
    showBlueSkySearch: null
}


const DisplaySlice = createSlice({
    name: 'display',
    initialState: initialState,
    reducers: {
        displayMindMap: (state, action) => {
            state.showMindMap = action.payload
        },
        displaySearch: (state, action) => {
            state.showSearch = action.payload
        },
        displayArticleContent: (state, action) => {
            state.showContent = action.payload
        },
        displayWrapUp: (state, action) => {
            state.showWrapUp = action.payload
        },
        displayCompletion: (state, action) => {
            state.showCompletion = action.payload
        },
        displayResults: (state, action) => {
            state.showResults = action.payload
        },
        displayWorkModal: (state, action) => {
            state.showWorkModal = action.payload
        },
        displayReturnModal: (state, action) => {
            state.showBackToSearchModal = action.payload
        },
        displayGetArticlesModal: (state, action) => {
            state.showGetArticlesModal = action.payload
        },
        displaySelectionWarning: (state, action) => {
            state.showSelectWarning = action.payload
        },
        displaySelectTooltip: (state, action) => {
            state.showSelectTooltip = action.payload
        },
        displayReadingTooltip: (state, action) => {
            state.showReadingTooltip = action.payload
        },
        displaySelectBar: (state, action) => {
            state.showSelectBar = action.payload
        },
        displayFeedBackForm: (state, action) => {
            state.showFeedBackForm = action.payload
        },
        displayBlueSkySearch: (state, action) => {
            state.showBlueSkySearch = action.payload
        }
    }
})

export const { displayMindMap, displaySearch, displayArticleContent, displayCompletion, displayWrapUp, displayResults,
    displayWorkModal, displayReturnModal, displayGetArticlesModal, displaySelectionWarning, displaySelectTooltip, displayReadingTooltip,
    displaySelectBar, displayFeedBackForm, displayBlueSkySearch } = DisplaySlice.actions

export default DisplaySlice.reducer