import TextInput from '@components/shared/TextInput'
import { Formik, FieldArray, Form } from 'formik'
import * as Yup from 'yup'
import React from 'react'
import Button from '@components/shared/Button'

const CreateNewBoard = () => {

    const validate = Yup.object({
        name: Yup.string().required("Board title is required"),
        columns: Yup.array().of(
            Yup.string().required("Column title is required"),
        )
    })

    return (
        <div>
            <Formik
                initialValues={{ name: "", columns: ['Todo', 'doing'] }}
                validationSchema={validate}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setSubmitting(true)

                    //make async call
                    console.log('submit:', values);
                    setSubmitting(false)
                    resetForm()
                }}
            >
                {({ values, isSubmitting, handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <TextInput label='Board Name' name="name" type="input" placeholder='eg: Web Design' />
                        <label className="body-md capitalize text-mediumGrey dark:text-white mt-6 block">
                            Board Columns
                        </label>

                        <FieldArray name="columns"
                            render={val => (
                                <div>
                                    {values.columns.map((_, i) => (
                                        <div key={i} className="flex">
                                            <TextInput label='' name={`columns[${i}]`} type="text" placeholder="e.g. Archived" />
                                            <button onClick={() => val.remove(i)}
                                             className="text-mediumGrey hover:text-mainRed ml-4"
                                            >
                                                <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
                                                    <g fill="currentColor" fillRule="evenodd">
                                                        <path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z" />
                                                        <path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z" />
                                                    </g>
                                                </svg>
                                            </button>
                                        </div>
                                    ))}
                                    <br />

                                    <button
                                        type='submit'
                                        onClick={() => val.push('')}
                                        className={'bg-[#635FC71A] rounded-full w-full py-[7px] text-mainPurple transition duration-200 text-base hover:bg-mainPurpleHover font-sans'}
                                    >
                                        {'+ Add New Column'}
                                    </button>
                                </div>
                            )}
                        />
                        <br />

                        <Button type="submit" disabled={isSubmitting} children={'Save Changes'} width={"w-full"} padding={'py-[7px]'} color={'text-white'} />
                        <pre>{JSON.stringify(values, null, 2)}</pre>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default CreateNewBoard