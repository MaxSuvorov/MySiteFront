import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Project } from '../Types/Project';

interface ProjectsState {
    items: Project[];
}

const initialState: ProjectsState = {
    items: [],
};

const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        addProject(state, action: PayloadAction<Project>) {
            state.items.push(action.payload);
    },
 },
});
export const {addProject } = projectsSlice.actions;
export default projectsSlice.reducer;