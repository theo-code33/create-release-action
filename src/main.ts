import * as core from '@actions/core'
import * as github from '@actions/github'

/**
 * The createRelease function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function createRelease(): Promise<void> {
  try {
    const version = core.getInput('version')
    const token = core.getInput('token')

    const { context } = github

    const octokit = github.getOctokit(token)
    const { repository } = context.payload

    if (!repository) return core.setFailed('No repository found.')

    await octokit.rest.repos.createRelease({
      owner: repository.owner.login,
      repo: repository.full_name?.split('/')[1] || repository.name,
      tag_name: version,
      tag_commitish: context.sha,
      name: version,
      body: `New release ${version} published to NPM.`,
      draft: false,
      prerelease: false,
      generate_release_notes: false
    })
  } catch (error: any) {
    core.setFailed(error.message)
  }
}
