import PropTypes from 'prop-types';
import { Form, FormikProvider } from 'formik';
// material
import {
  Box,
  Radio,
  Stack,
  Button,
  Drawer,
  Divider,
  Checkbox,
  FormGroup,
  IconButton,
  Typography,
  RadioGroup,
  FormControlLabel
} from '@mui/material';
//
import Iconify from './Iconify';
import Scrollbar from './Scrollbar';
import ColorManyPicker from './ColorManyPicker';
import {Product} from "../../shared/shareddtypes";

// ----------------------------------------------------------------------

export const SORT_BY_OPTIONS = [
  { value: 'featured', label: 'Más viejo' },
  { value: 'newest', label: 'Más nuevo' },
  { value: 'priceDesc', label: 'Precio: Alto-Bajo' },
  { value: 'priceAsc', label: 'Precio: Bajo-Alto' }
];
export const FILTER_CATEGORY_OPTIONS = ['Todo', 'Zapatos', 'Tronco', 'Pantalones'];
export const FILTER_PRICE_OPTIONS = [
  { value: 'below', label: 'Menor a 25€' },
  { value: 'between', label: 'Entre 25€ - 75€' },
  { value: 'above', label: 'Superior a 75€' }
];
export const FILTER_COLOR_OPTIONS = [
  '#00AB55',
  '#000000',
  '#FFFFFF',
  '#FFC0CB',
  '#FF4842',
  '#1890FF',
  '#94D82D',
  '#FFC107'
];

// ----------------------------------------------------------------------

Filter.propTypes = {
  isOpenFilter: PropTypes.bool,
  onResetFilter: PropTypes.func,
  onOpenFilter: PropTypes.func,
  onCloseFilter: PropTypes.func,
  formik: PropTypes.object,
  products: PropTypes.object
};

export default function Filter({
  isOpenFilter,
  onResetFilter,
  onOpenFilter,
  onCloseFilter,
  formik,
  products
}) {
  const { values, getFieldProps, handleChange } = formik;

  return (
    <>
      <Button
        disableRipple
        color="inherit"
        endIcon={<Iconify icon="ic:round-filter-list" sx={{ maxWidth: 20 }} />}
        onClick={onOpenFilter}
      >
        Filters&nbsp;
      </Button>

      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate>
          <Drawer
            anchor="right"
            open={isOpenFilter}
            onClose={onCloseFilter}
            PaperProps={{
              sx: { width: 280, border: 'none', overflow: 'hidden' }
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ px: 1, py: 2 }}
            >
              <Typography variant="subtitle1" sx={{ ml: 1 }}>
                Filtros
              </Typography>
              <IconButton onClick={onCloseFilter}>
                <Iconify icon="eva:close-fill" sx={{ maxWidth: 20 }} width={20} height={20} />
              </IconButton>
            </Stack>

            <Divider />

            <Scrollbar sx={{ px: 2.5, py: 3, display: 'inline-flex' }}> 
              <Stack spacing={3} sx={{ p: 3 }}>

                <div>
                  <Typography variant="subtitle1" gutterBottom>
                    Categoría
                  </Typography>
                  <RadioGroup {...getFieldProps('category')}>
                    {FILTER_CATEGORY_OPTIONS.map((item) => (
                      <FormControlLabel key={item} value={item} control={<Radio />} label={item} />
                    ))}
                  </RadioGroup>
                </div>

                <div>
                  <Typography variant="subtitle1" gutterBottom>
                    Precio
                  </Typography>
                  <RadioGroup {...getFieldProps('priceRange')}>
                    {FILTER_PRICE_OPTIONS.map((item) => (
                      <FormControlLabel
                        key={item.value}
                        value={item.value}
                        control={<Radio />}
                        label={item.label}
                      />
                    ))}
                  </RadioGroup>
                </div>

                {/*<div>*/}
                {/*  <Typography variant="subtitle1" gutterBottom>*/}
                {/*    Color*/}
                {/*  </Typography>*/}
                {/*  <ColorManyPicker*/}
                {/*      name="colors"*/}
                {/*      colors={FILTER_COLOR_OPTIONS}*/}
                {/*      onChange={handleChange}*/}
                {/*      onChecked={(color) => values.colors.includes(color)}*/}
                {/*      sx={{ maxWidth: 38 * 4 }}*/}
                {/*  />*/}
                {/*</div>*/}

              </Stack>
            </Scrollbar>

            <Box sx={{ p: 3 }}>
              <Button
                fullWidth
                size="large"
                type="submit"
                color="inherit"
                variant="outlined"
                onClick={onResetFilter}
                startIcon={<Iconify icon="ic:round-clear-all" sx={{ maxWidth: 20 }}/>}
              >
                Quitar Filtros
              </Button>
            </Box>
          </Drawer>
        </Form>
      </FormikProvider>
    </>
  );
}
