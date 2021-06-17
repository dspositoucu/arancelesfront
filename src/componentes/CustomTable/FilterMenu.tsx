import React, { FC, useState } from 'react'
import Menu from '@material-ui/core/Menu';
import ButtonHeader from '../Buttons/ButtonHeader'
import { useDispatch,useSelector } from 'react-redux'

//config
import menuFilterData from '../../config/filterMenu.config'

//types
import { AppState } from '../../Redux/state/AppState';

//components 
import FilterMenuItems from './FilterMenuItems';

//actions
import { addFilter } from '../../Redux/actions/ActionCreator'

interface Props { }

const FilterMenu: FC<Props> = (props) => {
    const dispatch = useDispatch()
    const { filterTags } =  useSelector((state:AppState) => state.PersonState)

    const [checked, setChecked] = useState<any>({ checked: '' });
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleChange = (value: string) => {

        setChecked({
            ...checked,
            [value]: !checked[value]
        });
        dispatch(addFilter(value))

    };

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <ButtonHeader
                iconType="filter"
                onClick={handleClick}
                label="Filtros Alumnos"
            />
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {
                    menuFilterData.map((menuItem,key) => {
                        let item = menuItem.label.split(' ').join('_')

                        return (
                            <FilterMenuItems
                                key={key}
                                checked={!!filterTags[item as keyof Object]}
                                label={menuItem.label}
                                item={item}
                                onClick={() => handleChange(item)}
                            />
                        )
                    })
                }

            </Menu>
        </>
    )
}

export default FilterMenu