import React, { useState } from 'react';
import {
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Grid,
    IconButton,
} from '@mui/material';
import { Search as SearchIcon, } from '@mui/icons-material';

const Filter = ({ onFilterChange }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [experience, setExperience] = useState('');
    const [location, setLocation] = useState('');
    const [minSalary, setMinSalary] = useState('');
    const [role, setRole] = useState('');

    const handleExperienceChange = (event) => {
        setExperience(event.target.value);
        onFilterChange('experience', event.target.value);
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
        onFilterChange('location', event.target.value);
    };

    const handleMinSalaryChange = (event) => {
        setMinSalary(event.target.value);
        onFilterChange('minSalary', event.target.value);
    };



    const handleRoleChange = (event) => {
        setRole(event.target.value);
        onFilterChange('role', event.target.value);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        onFilterChange('search', event.target.value);
    };

    return (
        <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6} md={3}>
                <TextField
                    fullWidth
                    label="Role"
                    variant="outlined"
                    value={role}
                    onChange={handleRoleChange}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <FormControl fullWidth variant="outlined">
                    <InputLabel>Experience</InputLabel>
                    <Select
                        value={experience}
                        onChange={handleExperienceChange}
                        label="Experience"
                    >
                        <MenuItem value="">
                            <em>All</em>
                        </MenuItem>
                        {[...Array(10).keys()].map(exp => (
                            <MenuItem key={exp + 1} value={(exp + 1).toString()}>
                                {`${exp + 1}`}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <FormControl fullWidth variant="outlined">
                    <InputLabel>Location</InputLabel>
                    <Select
                        value={location}
                        onChange={handleLocationChange}
                        label="Location"
                    >
                        <MenuItem value="">
                            <em>All</em>
                        </MenuItem>
                        <MenuItem value="remote">Remote</MenuItem>
                        <MenuItem value="hybrid">Hybrid</MenuItem>
                        <MenuItem value="inoffice">In Office</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <TextField
                    fullWidth
                    label="Minimum Base Pay"
                    variant="outlined"
                    value={minSalary}
                    onChange={handleMinSalaryChange}
                />

            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <TextField
                    fullWidth
                    label="Search Company Name"
                    variant="outlined"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    InputProps={{
                        endAdornment: (
                            <IconButton size="small">
                                <SearchIcon />
                            </IconButton>
                        ),
                    }}
                />
            </Grid>
        </Grid>
    );
};

export default Filter;
