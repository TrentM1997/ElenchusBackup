import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "@/SupaBase/supaBaseClient";


interface SaveInvestigation {
    status: string,
    saved: boolean,
    sources: string[] | null,
    swapButtons: boolean | null
}

const initialState: SaveInvestigation = {
    status: 'idle',
    saved: null,
    sources: null,
    swapButtons: false
}

export const saveUserInvestigation = createAsyncThunk(
    'user/SaveInvestigation',
    async (investigationData: any, thunkAPI) => {
        const { idea, initial_perspective, biases, premises, ending_perspective, changed_opinion, new_concepts, takeaway, user_id, had_merit, sources, wikipedia_extracts } = investigationData
        const { data, error } = await supabase
            .from('investigations')
            .insert([{
                idea: idea,
                initial_perspective: initial_perspective,
                biases: biases,
                premises: premises,
                ending_perspective: ending_perspective,
                changed_opinion: changed_opinion,
                new_concepts: new_concepts,
                takeaway: takeaway,
                had_merit: had_merit,
                user_id: user_id,
                sources: sources,
                wikipedia_extracts: wikipedia_extracts
            }]).select()
        if (error) {
            console.log(error.message)
            return thunkAPI.rejectWithValue(error.message)
        } else if (data) {
            return data
        }
        console.log(data)
    }
)


const SaveInvestigationSlice = createSlice({
    name: 'saveInvestigation',
    initialState: initialState,
    reducers: {
        removeNotification: (state, action) => {
            state.status = action.payload
        },
        recordSources: (state, action) => {
            state.sources = action.payload
        },
        switchButtons: (state, action) => {
            state.swapButtons = action.payload
        },
        researchSaved: (state, action) => {
            state.saved = action.payload
        },
        clearSaveInvestigationSlice: () => initialState
    },
    extraReducers: (builder) => {

        builder
            .addCase(saveUserInvestigation.pending, (state, action) => {
                state.status = 'pending'
            })
            .addCase(saveUserInvestigation.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.saved = true
            })
            .addCase(saveUserInvestigation.rejected, (state, action) => {
                state.status = 'rejected';
                state.saved = false

            })
    }
})

export const { removeNotification, clearSaveInvestigationSlice, recordSources, switchButtons, researchSaved } = SaveInvestigationSlice.actions

export default SaveInvestigationSlice.reducer