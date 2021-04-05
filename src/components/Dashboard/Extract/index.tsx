import React, { useMemo } from 'react'
import moneyIcon from '../../../assets/svgs/money-icon.svg'
import creditCardsIcon from '../../../assets/svgs/credit-cards-icon.svg'
import { Conta } from '../../../types/dash-board'

import { CardContainer, CardDashboard } from './styles'
import { DashCardHeader } from '../../../styles/Shared'

interface ExtractData {
    contaBanco?: Conta,
    contaCredito?: Conta,
}

enum PlanosConta {
    R = 'Receitas',
    D = 'Despesas',
    TC = 'Transferência entre contas',
    TU = 'Transferência entre usuários'
}

const Extract: React.FC<ExtractData> = (props) => {
    const allLaunchs = useMemo(() => {
        if (props.contaBanco?.lancamentos && props.contaCredito?.lancamentos) {
            const initLaunchs = [...props.contaBanco.lancamentos, ...props.contaCredito.lancamentos]

            const orderedLauchs = initLaunchs.slice().sort((a, b) => {
                return Number(new Date(a.data)) - Number(new Date(b.data))
            }).reverse()

            return orderedLauchs
        } else {
            return []
        }
    }, [props.contaBanco?.lancamentos, props.contaCredito?.lancamentos])

    function typePlans(typePlan: string) {
        if (typePlan === 'R') {
            return PlanosConta.R
        } else if (typePlan === 'D') {
            return PlanosConta.D
        } else if (typePlan === 'TC') {
            return PlanosConta.TC
        } else {
            return PlanosConta.TU
        }
    }

    return (
        <CardContainer>
            <CardDashboard className="scroll">
                <DashCardHeader>
                    <img src={moneyIcon} alt="money icon" />
                    <p>Últimos lançamentos</p>
                </DashCardHeader>
                {allLaunchs.length === 0 && 'Nenhum lancamento'}
                {allLaunchs && allLaunchs.map((launch, index) => {
                    return (
                        <div className="receipts credit-cards" key={index}>
                            <img src={creditCardsIcon} alt="credit cards icon" />
                            <div className="text-items">
                                <strong>{typePlans(launch.planoConta.tipoMovimento)}</strong>
                                <p>{launch.descricao}</p>
                                <strong
                                    className={launch.valor.toString().includes('-') ? 'negative' : 'positive'}
                                    >{launch.valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</strong>
                            </div>
                            <p className="date">{launch.data}</p>
                        </div>
                    )
                })}
            </CardDashboard>
        </CardContainer>
    )
}

export default Extract
