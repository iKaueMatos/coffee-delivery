import { MapPinLine } from 'phosphor-react'
import {
  AddresContainer,
  ContainerErroCity,
  ContainerErroComplement,
  ContainerErroNumber,
  ContainerErroState,
  ContainerInput,
  ErrorMensage,
  InputCep,
  InputCity,
  InputComplement,
  InputContainer,
  InputNeighborhood,
  InputNumber,
  InputState,
  InputStreet,
  Subtitle,
  TextContainer,
  Title,
  TitleContainer,
} from './style'
import { useFormContext } from 'react-hook-form'

export function Addres() {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <AddresContainer>
      <TitleContainer>
        <MapPinLine width={'1.375rem'} height={'1.375rem'} color="#C47F17" />
        <TextContainer>
          <Title>Endereço de Entrega</Title>
          <Subtitle>Informe o endereço onde deseja receber seu pedido</Subtitle>
        </TextContainer>
      </TitleContainer>

      <InputContainer>
        <InputCep
          type="number"
          placeholder="CEP"
          {...register('cep', { valueAsNumber: true })}
        />
        {errors.cep && (
          <ErrorMensage> Verifique se o CEP está correto </ErrorMensage>
        )}
        <InputStreet type="text" placeholder="Rua" {...register('street')} />
        {errors.street && (
          <ErrorMensage> Verifique se o endereço está correto </ErrorMensage>
        )}

        <ContainerInput>
          <ContainerErroNumber>
            <InputNumber
              type="number"
              placeholder="Número"
              {...register('number', { valueAsNumber: true })}
            />
            {errors.number && (
              <ErrorMensage> Verifique se o número está correto </ErrorMensage>
            )}
          </ContainerErroNumber>

          <ContainerErroComplement>
            <InputComplement
              type="text"
              placeholder="Complemento"
              {...register('complement')}
            />
            {errors.complement && (
              <ErrorMensage>
                O número de caracteres foi ultrapassado
              </ErrorMensage>
            )}
          </ContainerErroComplement>
        </ContainerInput>

        <ContainerInput>
          <ContainerErroNumber>
            <InputNeighborhood
              type="text"
              placeholder="Bairro"
              {...register('neighborhood')}
            />
            {errors.neighborhood && (
              <ErrorMensage> Verifique se o bairro está correto </ErrorMensage>
            )}
          </ContainerErroNumber>

          <ContainerErroCity>
            <InputCity type="text" placeholder="Cidade" {...register('city')} />
            {errors.city && (
              <ErrorMensage> Verifique se a cidade está correto </ErrorMensage>
            )}
          </ContainerErroCity>

          <ContainerErroState>
            <InputState type="text" placeholder="UF" {...register('state')} />
            {errors.state && (
              <ErrorMensage> Verifique se o estado está correto </ErrorMensage>
            )}
          </ContainerErroState>
        </ContainerInput>
      </InputContainer>
    </AddresContainer>
  )
}
