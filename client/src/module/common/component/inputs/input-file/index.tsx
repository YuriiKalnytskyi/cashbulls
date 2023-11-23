import { getIn, useFormikContext } from 'formik';
import React, { useCallback } from 'react';

import { fileService } from '@/module/common/services';
import { SubTitleCommon } from '@/module/common/styles';

import * as Styled from './avatar-setup.styled';

export interface IAvatarSetup {
  label?: string;
  name: string;
  readOnly?: boolean;
}

export const InputFile = ({ label, name, readOnly }: IAvatarSetup) => {
  const { values, setFieldValue } = useFormikContext();

  const avatar = getIn(values, name);
  const [dragging, setDragging] = React.useState(false);

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileBase64 = await fileService.convertBase64(file);
      setFieldValue(name, fileBase64);
    }
  };

  const delAvatar = () => {
    setFieldValue(name, null);
    setDragging(false);
  };

  const onDrop = useCallback(
    async (files: FileList) => {
      const file = files[0];
      if (file) {
        const fileBase64 = await fileService.convertBase64(file);
        setFieldValue(name, fileBase64);
      }
    },
    [setFieldValue, name]
  );

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    onDrop(e.dataTransfer.files);
  };

  const onDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(true);
  };

  const onDragLeave = () => {
    setDragging(false);
  };

  return (
    <Styled.OptionBlock>
      {label && <Styled.FieldLabel>{label}</Styled.FieldLabel>}
      <Styled.AvatarContainer
        onDragOver={handleDragOver}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={handleDrop}
        dragging={dragging}
      >
        {avatar ? <Styled.Avatar src={avatar} alt='avatar' key={avatar} /> : null}

        {!readOnly && !avatar && (
          <input id='field-upload' type='file' accept='image/*' onChange={onChange} title='' />
        )}

        {!avatar && (
          <Styled.TextContainer ai='center'>
            <SubTitleCommon className='first'>
              <span>Select a file </span> or drag and drop here
            </SubTitleCommon>

            <SubTitleCommon className='last'>JPG, PNG , file size no more than 10MB</SubTitleCommon>
          </Styled.TextContainer>
        )}

        {avatar && !readOnly && (
          <Styled.CloseButton onClick={delAvatar}>&#10006;</Styled.CloseButton>
        )}
      </Styled.AvatarContainer>
    </Styled.OptionBlock>
  );
};
