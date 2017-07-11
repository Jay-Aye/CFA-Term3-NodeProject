import React from 'react'
import Field from './Field'
import TextField from './TextField'
import SelectField from './SelectField'

import readAndClearForm from './readAndClearForm'

function submitCreate(event, onCreate) {
    event.preventDefault()

    const form = event.target
    const jobValues = readAndClearForm(form)
    onCreate(jobValues)
}

export default function CreateJobForm({
    onCreate
}) {
  return (
    <form onSubmit={ (event) => submitCreate(event, onCreate) }>
      <div>
        <div class='pickup'>
          <Field placeholder='Street...' name='pickupStreet' />
          <Field placeholder='Suburb...' name='pickupSuburb' />
          <Field placeholder='Postcode...' name='pickupPostcode' />
          <SelectField placeholder='State...' name='pickupState' />
          <Field type='date' name='pickupDate' />
          <Field type='time' name='pickupTime' />
          <TextField placeholder='Instructions..' name='pickupInstructions' />
        </div>
        <div class=''>
          <TextField placeholder='Description of goods...' name='descriptionOfGoods' />
        </div>
      </div>

      <div>
        <div class='delivery'>
          <Field placeholder='Street...' name='deliveryStreet' />
          <Field placeholder='Suburb...' name='deliverySuburb' />
          <Field placeholder='Postcode...' name='deliveryPostcode' />
          <SelectField placeholder='State...' name='deliveryState' />
          <Field type='date' name='deliveryDate' />
          <Field type='time' name='deliveryTime' />
          <TextField placeholder='Instructions..' name='deliveryInstructions' type=''/>
        </div>
        <div class=''>
          <Field type='' placeholder='size of mm' name='dimensions{length}' />
          <Field placeholder='size of mm' name='dimensions{height}' />
          <Field placeholder='size of mm' name='dimensions{width}' />
          <Field placeholder='kgs' name='weight' />
          <SelectField placeholder='Delivery Type' name='deliveryType'>
            <option value='truck(light)'>Truck(light)</option>
            <option value='ute'>Ute</option>
            <option value='truck(heavt)'>Truck(heavy)</option>
          </SelectField>
        </div>
      </div>
        <button type='submit'>Create Job</button>
    </form>
  )
}